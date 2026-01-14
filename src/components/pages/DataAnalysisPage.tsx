import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { DataandAnalysis } from '@/entities';
import { format } from 'date-fns';

export default function DataAnalysisPage() {
  const [dataItems, setDataItems] = useState<DataandAnalysis[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDataAnalysis();
  }, []);

  const loadDataAnalysis = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<DataandAnalysis>('dataanalysis');
      setDataItems(result.items);
    } catch (error) {
      console.error('Error loading data analysis:', error);
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
            Data & Analysis
          </h1>
          <p className="font-paragraph text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
            Statistical evidence and analytical findings that illuminate the quantitative dimensions of corruption's impact on Nigeria.
          </p>
        </motion.div>
      </section>

      {/* Data Analysis Content */}
      <section className="w-full py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-[100rem] mx-auto min-h-[60vh]">
          {isLoading ? null : dataItems.length > 0 ? (
            <div className="space-y-20">
              {dataItems.map((item, index) => (
                <motion.article
                  key={item._id}
                  className="space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-center space-y-4">
                    <h2 className="font-heading text-3xl md:text-4xl text-primary">
                      {item.chartTitle}
                    </h2>
                    {item.datePublished && (
                      <p className="font-paragraph text-sm text-primary/60">
                        Published: {formatDate(item.datePublished)}
                      </p>
                    )}
                  </div>

                  {item.visualRepresentation && (
                    <div className="max-w-5xl mx-auto">
                      <div className="aspect-[16/10] overflow-hidden bg-secondary/5 p-8">
                        <Image 
                          src={item.visualRepresentation}
                          alt={item.chartTitle || 'Data visualization'}
                          className="w-full h-full object-contain"
                          width={1000}
                        />
                      </div>
                    </div>
                  )}

                  {item.analysisText && (
                    <div className="max-w-4xl mx-auto space-y-6">
                      <h3 className="font-heading text-2xl text-primary">Analysis</h3>
                      <p className="font-paragraph text-base text-primary leading-relaxed">
                        {item.analysisText}
                      </p>
                    </div>
                  )}

                  {(item.dataSourceName || item.dataSourceUrl) && (
                    <div className="max-w-4xl mx-auto p-6 bg-secondary/5 space-y-3">
                      <h4 className="font-heading text-lg text-primary">Data Source</h4>
                      <div className="flex items-start gap-3">
                        {item.dataSourceName && (
                          <p className="font-paragraph text-base text-primary">
                            {item.dataSourceName}
                          </p>
                        )}
                        {item.dataSourceUrl && (
                          <a 
                            href={item.dataSourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-paragraph text-base text-primary hover:underline"
                          >
                            <ExternalLink size={16} />
                            View Source
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {index < dataItems.length - 1 && (
                    <div className="max-w-4xl mx-auto pt-12">
                      <div className="border-t border-primary/10"></div>
                    </div>
                  )}
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
                Data analysis and visualizations are currently being prepared.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
