'use client';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";

export default function SkillsPage() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "REST APIs",
        "MogoDB",
        "Prisma",
        "PostgreSQL",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "GitHub Actions",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mt-20 mx-auto px-4 py-20 h-full">
      <h1 className="text-2xl md:text-3xl text-white font-bold mb-10">
        Skills
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <HoverEffect
            key={index}
            className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10 text-center"
          >
            <HoverEffect>
              <h2 className="text-xl font-semibold text-white mb-4">
                {skillGroup.category}
              </h2>
            </HoverEffect>
            <ul className="space-y-2">
              {Array.isArray(skillGroup.items) ? skillGroup.items.map((skill, skillIndex) => (
                <li 
                  key={skillIndex}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {skill}
                </li>
              )) : null}
            </ul>
          </HoverEffect>
        ))}
      </div>
    </div>
  );
}