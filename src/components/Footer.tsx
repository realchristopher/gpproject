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
              An in-depth research project examining how the lack of affordable, off-grid electricity in Nigeria affects vegetable spoilage in the food industry. Exploring climate change, energy, and resources through local, national, and global perspectives.
            </p>
            <div className="pt-4">
              <h4 className="font-heading text-lg text-secondary-foreground mb-2">{"The Team"}</h4>
              <p className="font-paragraph text-base text-secondary-foreground/80">{"Christopher, Asher, Tomisin, Joy, and Myra"}</p>
            </div>
          </div>
          
          <div className="space-y-4 md:text-right">
            <h4 className="font-heading text-xl text-secondary-foreground">
              Project Information
            </h4>
            <div className="font-paragraph text-base text-secondary-foreground/80 space-y-2">
              <p>Grade 10 IGCSE</p>

            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <p className="font-paragraph text-sm text-secondary-foreground/60 text-center">{"© 2026 IGCSE Global Perspectives Project. All research conducted for educational purposes. nothing but nut"}</p>
        </div>
      </div>
    </footer>
  );
}
