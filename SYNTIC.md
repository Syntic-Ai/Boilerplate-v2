# Syntic Boilerplate V2

## Commands

```bash
npm run dev      # Start dev server on port 8080
npm run build    # Production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19 |
| Build | Vite + SWC | 7 |
| Language | TypeScript (strict) | 5.9 |
| Styling | Tailwind CSS | 3.4 |
| Components | shadcn/ui (Radix) | latest |
| Animation | Framer Motion | 11 |
| Routing | React Router | 7 |
| State | TanStack React Query | 5 |
| Forms | React Hook Form + Zod | 7 / 4 |
| Backend | Supabase (Postgres, Auth, Storage, RLS) | 2 |
| Icons | Lucide React | 0.562 |
| Toasts | Sonner | 2 |

## Fonts

| Tailwind Class | Font | Use For |
|---------------|------|---------|
| `font-sans` | DM Sans | Body text, UI labels |
| `font-display` | Space Grotesk | Headlines, hero text |
| `font-serif` | Instrument Serif | Accents, pull quotes |
| `font-handwriting` | Caveat | Annotations, casual notes |
| `font-mono` | JetBrains Mono | Code blocks, technical |

All fonts are pre-loaded via Google Fonts in `index.html`.

## CSS Utilities

| Class | Effect |
|-------|--------|
| `glass` | Frosted glass (dark bg) — `bg-white/10 backdrop-blur-xl border-white/20` |
| `glass-light` | Frosted glass (light bg) — `bg-white/60 backdrop-blur-xl shadow-soft` |
| `gradient-primary` | Primary gradient background (indigo → purple) |
| `text-gradient` | Gradient text effect |
| `noise` | Subtle grain/noise overlay |
| `shadow-glow` | Indigo glow shadow |
| `shadow-glow-lg` | Larger indigo glow |
| `shadow-soft` | Subtle soft shadow |
| `shadow-elevated` | Elevated card shadow |

## Color Tokens

Primary is **indigo/violet** (`hsl(262 83% 58%)`), accent is **rose/coral** (`hsl(346 77% 50%)`).

CSS variables in `src/index.css` — all HSL format. Full dark mode support via `.dark` class.

## Animation Classes

Tailwind: `animate-fade-in`, `animate-slide-up`, `animate-slide-down`, `animate-scale-in`, `animate-float`

Framer Motion is available for more complex animations (stagger, layout, gestures).

## Components (shadcn/ui)

All imports from `@/components/ui/<name>`:

| Component | Key Exports |
|-----------|-------------|
| accordion | Accordion, AccordionItem, AccordionTrigger, AccordionContent |
| alert | Alert, AlertTitle, AlertDescription |
| alert-dialog | AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction, AlertDialogCancel |
| aspect-ratio | AspectRatio |
| avatar | Avatar, AvatarImage, AvatarFallback |
| badge | Badge |
| breadcrumb | Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator |
| button | Button, buttonVariants |
| calendar | Calendar |
| card | Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| carousel | Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext |
| chart | ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent |
| checkbox | Checkbox |
| collapsible | Collapsible, CollapsibleTrigger, CollapsibleContent |
| command | Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem |
| context-menu | ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem |
| dialog | Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription |
| drawer | Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription |
| dropdown-menu | DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem |
| form | Form, FormField, FormItem, FormLabel, FormControl, FormMessage |
| hover-card | HoverCard, HoverCardTrigger, HoverCardContent |
| input | Input |
| input-otp | InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator |
| label | Label |
| menubar | Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem |
| navigation-menu | NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink |
| pagination | Pagination, PaginationContent, PaginationItem, PaginationLink |
| popover | Popover, PopoverTrigger, PopoverContent |
| progress | Progress |
| radio-group | RadioGroup, RadioGroupItem |
| resizable | ResizablePanelGroup, ResizablePanel, ResizableHandle |
| scroll-area | ScrollArea, ScrollBar |
| select | Select, SelectTrigger, SelectValue, SelectContent, SelectItem |
| separator | Separator |
| sheet | Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle |
| sidebar | Sidebar, SidebarProvider, SidebarTrigger, SidebarContent |
| skeleton | Skeleton |
| slider | Slider |
| sonner | Toaster (as Sonner), toast |
| switch | Switch |
| table | Table, TableHeader, TableBody, TableRow, TableHead, TableCell |
| tabs | Tabs, TabsList, TabsTrigger, TabsContent |
| textarea | Textarea |
| toast | Toast, ToastAction |
| toaster | Toaster |
| toggle | Toggle |
| toggle-group | ToggleGroup, ToggleGroupItem |
| tooltip | Tooltip, TooltipTrigger, TooltipContent, TooltipProvider |

## Architecture Rules

1. **Max 300 lines** per component file — split into smaller components if larger
2. **Import alias** `@/` maps to `src/` — always use `@/components/ui/button`, never relative `../../`
3. **cn() utility** — always use `cn()` from `@/lib/utils` for conditional Tailwind classes
4. **Service layer** — Supabase queries go in dedicated service files, not inline in components
5. **TypeScript strict** — `strict: true`, `noImplicitAny`, `strictNullChecks` are all enabled
6. **Single responsibility** — one component = one purpose; extract reusable logic into hooks

## Design Principles

- **Mobile-first**: Design for 375px first, scale up with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- **WCAG AA**: Minimum 4.5:1 contrast ratio for text, 3:1 for large text
- **Generous spacing**: Use Tailwind spacing scale (`p-6`, `gap-4`, `space-y-8`) liberally
- **Consistent radius**: Use `rounded-lg` (maps to `--radius: 0.75rem`) for cards and inputs
- **Bold, not bland**: Use `font-display` for headlines, `text-gradient` for hero text, `gradient-primary` for accents

## File Structure

```
src/
├── components/ui/     # shadcn/ui primitives (35 files)
├── hooks/             # Custom React hooks
├── lib/               # Utilities (cn, services)
├── pages/             # Route pages
└── integrations/      # Supabase client + types
```

## Supabase Quick Reference

```tsx
import { supabase } from "@/integrations/supabase/client";

// Query
const { data, error } = await supabase.from("table").select("*");

// Insert
const { data, error } = await supabase.from("table").insert({ col: "val" });

// Auth
const { data: { user } } = await supabase.auth.getUser();

// With TanStack Query
const { data } = useQuery({
  queryKey: ["items"],
  queryFn: async () => {
    const { data, error } = await supabase.from("items").select("*");
    if (error) throw error;
    return data;
  },
});
```
