<template>
    <div class="grid grid-cols-1">
        <Intro>
            <h1 class="text-3xl font-medium mb-6 uppercase">About Me</h1>
            <p class="mx-auto">
                Building web applications since 2007. Over the years I've worked across diverse
                industries—from managing digital content platforms at Philips to leading frontend
                development for high-stakes applications in public broadcasting and healthcare.
            </p>
        </Intro>

        <h1 class="text-3xl font-medium mt-24 mb-6 uppercase">Work experience</h1>
        <ul class="space-y-6">
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2020 - 2025</time>
                <div>
                    <h3 class="text-sm font-semibold text-white">Zilveren Kruis</h3>
                    <p class="text-xs text-neutral-400 mt-1">Leiden, The Netherlands</p>
                </div>
                <span class="text-sm italic text-neutral-400">Senior Frontend Developer</span>

                <ul class="col-span-3 list-disc ml-3 text-sm space-y-4">
                    <li>
                        Managed large-scale migration of core applications from Vue 2 Options API to
                        Vue 3 Composition API with TypeScript, improving codebase maintainability
                        and runtime performance.
                    </li>
                    <li>
                        Designed and built a modular component library of 20+ reusable UI components
                        with prop/emit typing and Pinia state management to ensure architectural
                        consistency across development teams.
                    </li>
                    <li>
                        Architected WCAG-compliant frontend interfaces, ensuring strict semantic
                        HTML, keyboard navigation, and screen reader accessibility across
                        high-traffic sales funnels.
                    </li>
                    <li>
                        Established unit testing standards using Vitest/Jest and integrated RESTful
                        services in agile, cross-functional engineering setups.
                    </li>
                </ul>
            </li>
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2016 - 2020</time>
                <div>
                    <h3 class="text-sm font-semibold text-white">Developers.nl</h3>
                    <p class="text-xs text-neutral-400 mt-1">Rotterdam, The Netherlands</p>
                </div>
                <span class="text-sm italic text-neutral-400">Frontend Developer</span>

                <ul class="col-span-3 list-disc ml-3 text-sm space-y-4">
                    <li>
                        Led frontend development for Websight, a complex public broadcasting
                        application, using React and Redux for structured state management and data
                        orchestration.
                    </li>
                    <li>
                        Overhauled mobile responsiveness and WCAG compliance for the MijnOverheid
                        portal, improving accessibility for citizens across all screen sizes.
                    </li>
                    <li>
                        Rebuilt client web platforms translating complex design systems into
                        modular, production-ready frontend code.
                    </li>
                </ul>
            </li>
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2012 - 2016</time>

                <div>
                    <h3 class="text-sm font-semibold text-white">Luminis</h3>
                    <p class="text-xs text-neutral-400 mt-1">Apeldoorn, The Netherlands</p>
                </div>

                <span class="text-sm italic text-neutral-400">Frontend Engineer</span>

                <ul class="col-span-3 list-disc ml-3 text-sm space-y-4">
                    <li>
                        Rabobank: Engineered automated integration testing suites for critical core
                        banking applications, ensuring regression-free deployments and system
                        stability.
                    </li>
                    <li>
                        Van Dijk Educatie and Monuta: Developed dynamic e-commerce features, user
                        cost calculators and interactive product cataloging tools using AngularJS.
                    </li>
                    <li>
                        PulseOn and Corporate Clients: Built modular e-learning course components
                        and modern responsive web templates ensuring optimal user engagement.
                    </li>
                </ul>
            </li>
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2007 - 2011</time>
                <div>
                    <h3 class="text-sm font-semibold text-white">Philips</h3>
                    <p class="text-xs text-neutral-400 mt-1">Eindhoven, The Netherlands</p>
                </div>
                <span class="text-sm italic text-neutral-400">Online Service Expert</span>

                <ul class="col-span-3 list-disc ml-3 text-sm space-y-4">
                    <li>
                        Ensured accurate and consistent content display across multiple languages
                        for the Philips TV and Male Grooming platforms.
                    </li>
                    <li>Managed content for the Philips MyKitchen platform using ATG CMS.</li>
                    <li>
                        Improved platform accessibility and user experience for international
                        audiences.
                    </li>
                </ul>
            </li>
        </ul>

        <h1 class="text-3xl font-medium mt-24 mb-6 uppercase">Education</h1>
        <ul class="space-y-6">
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2011</time>
                <div>
                    <h3 class="text-sm font-semibold text-white">
                        Hogeschool van Arnhem en Nijmegen
                    </h3>
                    <p class="text-xs text-neutral-400 mt-1">Arnhem, The Netherlands</p>
                </div>
                <span class="text-sm italic text-neutral-400 text-right"
                    >Bachelor of Information and <br />Communication Technology</span
                >
            </li>
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2006</time>
                <div>
                    <h3 class="text-sm font-semibold text-white">Gilde Opleidingen</h3>
                    <p class="text-xs text-neutral-400 mt-1">Venlo, The Netherlands</p>
                </div>
                <span class="text-sm italic text-neutral-400">MBO IT-administrator</span>
            </li>
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2002</time>

                <div>
                    <h3 class="text-sm font-semibold text-white">Valuas College</h3>
                    <p class="text-xs text-neutral-400 mt-1">Venlo, The Netherlands</p>
                </div>

                <span class="text-sm italic text-neutral-400"
                    >VMBO Administration and Economics</span
                >
            </li>
        </ul>
    </div>
</template>
