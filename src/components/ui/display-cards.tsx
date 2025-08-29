"use client";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  category?: string;
  color?: "yellow" | "green" | "blue" | "purple" | "orange" | "red";
  link?: string;
}

function ServiceCard({
  className,
  icon,
  title = "Serviço",
  description = "Descrição do serviço",
  category = "Online",
  color = "yellow",
  link,
}: ServiceCardProps) {
  const colorVariants = {
    yellow: {
      bg: "bg-gradient-to-br from-yellow-500/20 to-amber-600/20",
      border: "border-yellow-400/30 hover:border-yellow-400/60",
      icon: "bg-yellow-500 text-black",
      title: "text-yellow-400",
      glow: "hover:shadow-yellow-400/20"
    },
    green: {
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-600/20", 
      border: "border-green-400/30 hover:border-green-400/60",
      icon: "bg-green-500 text-black",
      title: "text-green-400",
      glow: "hover:shadow-green-400/20"
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20",
      border: "border-blue-400/30 hover:border-blue-400/60", 
      icon: "bg-blue-500 text-white",
      title: "text-blue-400",
      glow: "hover:shadow-blue-400/20"
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500/20 to-violet-600/20",
      border: "border-purple-400/30 hover:border-purple-400/60",
      icon: "bg-purple-500 text-white", 
      title: "text-purple-400",
      glow: "hover:shadow-purple-400/20"
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-500/20 to-red-600/20",
      border: "border-orange-400/30 hover:border-orange-400/60",
      icon: "bg-orange-500 text-black",
      title: "text-orange-400", 
      glow: "hover:shadow-orange-400/20"
    },
    red: {
      bg: "bg-gradient-to-br from-red-500/20 to-pink-600/20",
      border: "border-red-400/30 hover:border-red-400/60",
      icon: "bg-red-500 text-white",
      title: "text-red-400",
      glow: "hover:shadow-red-400/20"
    }
  };

  const colorStyle = colorVariants[color];

  const CardContent = () => (
    <>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 space-y-4">
        {/* Icon and Category */}
        <div className="flex items-center justify-between">
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colorStyle.icon)}>
            {icon}
          </div>
          <span className="text-xs font-medium text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className={cn("text-xl font-bold leading-tight", colorStyle.title)}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative group bg-black/40 backdrop-blur-sm border-2 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer block",
          colorStyle.bg,
          colorStyle.border,
          colorStyle.glow,
          className
        )}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div
      className={cn(
        "relative group bg-black/40 backdrop-blur-sm border-2 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl",
        colorStyle.bg,
        colorStyle.border,
        colorStyle.glow,
        className
      )}
    >
      <CardContent />
    </div>
  );
}

interface ServiceCardsProps {
  cards?: ServiceCardProps[];
}

export default function ServiceCards({ cards = [] }: ServiceCardsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((cardProps, index) => (
        <ServiceCard key={index} {...cardProps} />
      ))}
    </div>
  );
}