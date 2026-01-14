import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { CaseStudies } from '@/entities';

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudies[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<CaseStudies>('casestudies');
      setCaseStudies(result.items);
    } catch (error) {
      console.error('Error loading case studies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-secondary py-24 px-8 md:px-16 lg:px-24">
        <motion.div 
          className="max-w-[100rem] mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-secondary-foreground mb-6">
            Case Studies
          </h1>
          <p className="font-paragraph text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
            Documented examples of corruption incidents in Nigeria, examining their specific impacts on financial systems and resource distribution.
          </p>
        </motion.div>
      </section>

      {/* Case Studies Content */}
      <section className="w-full py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-[100rem] mx-auto min-h-[60vh]">
          {isLoading ? null : caseStudies.length > 0 ? (
            <div className="space-y-24">
              {caseStudies.map((caseStudy, index) => (
                <motion.article
                  key={caseStudy._id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    {caseStudy.evidenceImage && (
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image 
                          src={caseStudy.evidenceImage}
                          alt={caseStudy.caseTitle || 'Case study evidence'}
                          className="w-full h-full object-cover"
                          width={600}
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h2 className="font-heading text-3xl md:text-4xl text-primary">
                      {caseStudy.caseTitle}
                    </h2>
                    
                    {caseStudy.eventDescription && (
                      <div className="space-y-4">
                        <h3 className="font-heading text-xl text-primary">Event Description</h3>
                        <p className="font-paragraph text-base text-primary leading-relaxed">
                          {caseStudy.eventDescription}
                        </p>
                      </div>
                    )}
                    
                    {caseStudy.financialImpact && (
                      <div className="space-y-4 p-6 bg-secondary/5">
                        <h3 className="font-heading text-xl text-primary">Financial Impact</h3>
                        <p className="font-paragraph text-base text-primary leading-relaxed">
                          {caseStudy.financialImpact}
                        </p>
                      </div>
                    )}
                    
                    {caseStudy.resourceImpact && (
                      <div className="space-y-4 p-6 bg-secondary/5">
                        <h3 className="font-heading text-xl text-primary">Resource Impact</h3>
                        <p className="font-paragraph text-base text-primary leading-relaxed">
                          {caseStudy.resourceImpact}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-paragraph text-xl text-primary">
                Case studies are currently being compiled and will be available soon.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
