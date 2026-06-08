import React, { Component, type ReactNode } from "react";
import { globalErrorBus } from "./ErrorBus";
import { ErrorFallback } from "./ErrorFallback";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Emit to global error bus if needed
    // globalErrorBus.emit(error);  // optional
    console.error("Captured error:", error, errorInfo);
    globalErrorBus.emit({
      code: "RENDER_ERROR",
      message: error.message,
      stack: error.stack,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return <>{this.props.children}</>;
  }
}
