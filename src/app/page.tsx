import { content } from "@/config/content";
import { ExperienceProvider } from "@/hooks/useExperience";
import { StoryChrome } from "@/components/ui/StoryChrome";
import { OpeningSection } from "@/components/sections/OpeningSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyYouSection } from "@/components/sections/WhyYouSection";
import { WhatISeeSection } from "@/components/sections/WhatISeeSection";
import { AcceptanceSection } from "@/components/sections/AcceptanceSection";
import { FutureSection } from "@/components/sections/FutureSection";
import { BirthdaySection } from "@/components/sections/BirthdaySection";
import { FinalMessageSection } from "@/components/sections/FinalMessageSection";
export default function Home() { return <ExperienceProvider><a href="#about" className="skip-link">{content.ui.skip}</a><StoryChrome /><main><OpeningSection /><BirthdaySection /><AboutSection /><WhyYouSection /><WhatISeeSection /><AcceptanceSection /><FutureSection /><FinalMessageSection /></main></ExperienceProvider>; }


