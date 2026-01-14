import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { References } from '@/entities';
import { format } from 'date-fns';

export default function SourcesPage() {
  const [references, setReferences] = useState<References[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReferences();
  }, []);

  const loadReferences = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<References>('references');
      setReferences(result.items);
    } catch (error) {
      console.error('Error loading references:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    try {
      return format(new Date(date), 'MMMM d, yyyy');
    } catch {
      return '';
    }
  };

  const groupByDocumentType = (refs: References[]) => {
    const grouped: Record<string, References[]> = {};
    refs.forEach(ref => {
      const type = ref.documentType || 'Other';
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(ref);
    });
    return grouped;
  };

  const groupedReferences = groupByDocumentType(references);

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
            Sources & References
          </h1>
          <p className="font-paragraph text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive bibliography of all sources consulted and cited throughout this research project.
          </p>
        </motion.div>
      </section>

      {/* References Content */}
      <section className="w-full py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-[100rem] mx-auto min-h-[60vh]">
          {isLoading ? null : references.length > 0 ? (
            <div className="space-y-16">
              {Object.entries(groupedReferences).map(([type, refs], groupIndex) => (
                <motion.div
                  key={type}
                  className="space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
                >
                  <h2 className="font-heading text-3xl text-primary border-b border-primary/20 pb-4">
                    {type}
                  </h2>
                  
                  <div className="space-y-6">
                    {refs.map((reference, index) => (
                      <div 
                        key={reference._id}
                        className="p-6 bg-secondary/5 space-y-3 hover:bg-secondary/10 transition-colors duration-300"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-heading text-xl text-primary flex-1">
                            {reference.sourceTitle}
                          </h3>
                          {reference.sourceLink && (
                            <a 
                              href={reference.sourceLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 border border-buttonborder bg-buttonbackground text-primary font-paragraph text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                            >
                              <ExternalLink size={16} />
                              View Source
                            </a>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          {reference.authorPublisher && (
                            <p className="font-paragraph text-base text-primary">
                              <span className="font-semibold">Author/Publisher:</span> {reference.authorPublisher}
                            </p>
                          )}
                          
                          {reference.publicationDate && (
                            <p className="font-paragraph text-base text-primary">
                              <span className="font-semibold">Publication Date:</span> {formatDate(reference.publicationDate)}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
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
                Bibliography and references are currently being compiled.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Citation Note */}
      <section className="w-full bg-secondary py-16 px-8 md:px-16 lg:px-24">
        <motion.div 
          className="max-w-[100rem] mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-paragraph text-base text-secondary-foreground leading-relaxed max-w-3xl mx-auto">
            All sources have been carefully selected for their credibility and relevance to the research question. Citations follow academic standards and provide verifiable evidence for the project's findings.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
