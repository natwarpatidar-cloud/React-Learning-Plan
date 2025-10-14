import { Button } from "@/components/ui/button";
import React from "react";

function ErrorFallbackUI({ error, resetErrorBoundary }) {
  return (
    <div className="h-[100vh] flex justify-center items-center text-white">
      <div className="p-12 flex flex-col gap-3 bg-red-500 rounded-xl">
        <p className="font-bold text-3xl">Something went wrong</p>
        <p className="text-xl">{error?.message}</p>
        <Button
          variant="outline"
          className="text-black/70 cursor-pointer"
          onClick={resetErrorBoundary}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
    // window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallbackUI
          error={this.state.error}
          resetErrorBoundary={this.resetErrorBoundary}
        />
      );
    }

    return this.props.children;
  }
}

// import { ErrorBoundary } from "react-error-boundary";

// export const CustomErrorBoundary = ({ children }) => {
//     return (
//         <ErrorBoundary
//           FallbackComponent={ErrorFallbackUI}
//           onReset={() => window.location.reload()}
//         >
//           { children }
//         </ErrorBoundary>
//     );
// }