"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

type NodeMap = Map<string, HTMLElement>;

interface RedThreadContextType {
    register: (id: string, element: HTMLElement) => void;
    unregister: (id: string) => void;
    nodes: NodeMap;
}

const RedThreadContext = createContext<RedThreadContextType | null>(null);

export function RedThreadProvider({ children }: { children: React.ReactNode }) {
    const [nodes, setNodes] = useState<NodeMap>(new Map());

    const register = useCallback((id: string, element: HTMLElement) => {
        setNodes((prev) => {
            const newMap = new Map(prev);
            newMap.set(id, element);
            return newMap;
        });
    }, []);

    const unregister = useCallback((id: string) => {
        setNodes((prev) => {
            const newMap = new Map(prev);
            newMap.delete(id);
            return newMap;
        });
    }, []);

    return (
        <RedThreadContext.Provider value={{ register, unregister, nodes }}>
            {children}
        </RedThreadContext.Provider>
    );
}

export function useRedThread() {
    const context = useContext(RedThreadContext);
    if (!context) throw new Error("useRedThread must be used within a RedThreadProvider");
    return context;
}
