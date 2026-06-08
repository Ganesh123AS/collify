export type ErrorSeverity = "INFO" | "WARN" | "ERROR" | "CRITICAL";
export type ErrorType = "AUTHORIZATION" | "VALIDATION" | "NETWORK" | "UNKNOWN";

export interface GlobalError {
    code: string;
    message: string;
    source?: string;
    type?: ErrorType;
    severity?: ErrorSeverity;
    httpStatus?: number;
    timestamp?: string;
    context?: Record<string, any>;
    stack?: string;
    line?: number;
    column?: number;
}


export type ErrorListener = (error: GlobalError) => void;

class ErrorBus {
    private listeners = new Set<ErrorListener>();

    subscribe(listener: ErrorListener): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    emit(error: GlobalError) {
        this.listeners.forEach((listener) => listener(error));
    }

    clear() {
        //During appp logout/session reset
        // During HMR/ hot reload in development
        // Testing
        this.listeners.clear();
    }
}

export const globalErrorBus = new ErrorBus();
