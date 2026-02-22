import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Palette, Type, Layers, Zap, Code2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const features = [
  { icon: Type, label: "5 Premium Fonts" },
  { icon: Palette, label: "Vibrant Colors" },
  { icon: Layers, label: "Glass Effects" },
  { icon: Zap, label: "Framer Motion" },
  { icon: Code2, label: "Strict TypeScript" },
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full gradient-primary opacity-20 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent opacity-10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-8"
        >
          {/* Badge */}
          <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Syntic Boilerplate V2</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            Build{" "}
            <span className="text-gradient">Beautiful</span>
            <br />
            Apps with AI
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            A design-first React boilerplate with premium fonts, vibrant colors,
            glass-morphism, and Framer Motion — all ready for AI-powered generation.
          </motion.p>

          {/* CTA */}
          <motion.div custom={3} variants={fadeUp}>
            <Button
              size="lg"
              className="shadow-glow hover:shadow-glow-lg transition-shadow duration-300 text-base px-8 py-6 rounded-xl font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            custom={4}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 pt-4"
          >
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 glass-light rounded-full px-4 py-2 text-sm"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
