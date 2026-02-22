import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <p className="text-xl text-muted-foreground">
          This page doesn't exist.
        </p>
        <Button asChild variant="outline" size="lg" className="rounded-xl">
          <a href="/">
            <Home className="mr-2 w-4 h-4" />
            Back to Home
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
