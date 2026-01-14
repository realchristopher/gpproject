export default function Footer() {
  return (
    <footer className="w-full bg-secondary py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-secondary-foreground">
              IGCSE Global Perspectives Project
            </h3>
            <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed max-w-xl">
              An academic investigation into corruption's impact on Nigerian finances and resource access. Completed as part of the Grade 10 IGCSE Global Perspectives curriculum.
            </p>
          </div>
          
          <div className="space-y-4 md:text-right">
            <h4 className="font-heading text-xl text-secondary-foreground">
              Project Information
            </h4>
            <div className="font-paragraph text-base text-secondary-foreground/80 space-y-2">
              <p>Grade 10 IGCSE</p>
              <p>Global Perspectives Course</p>
              <p>Academic Year 2025-2026</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <p className="font-paragraph text-sm text-secondary-foreground/60 text-center">
            © 2026 IGCSE Global Perspectives Project. All research conducted for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
