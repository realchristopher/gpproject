/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: casestudies
 * Interface for CaseStudies
 */
export interface CaseStudies {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  caseTitle?: string;
  /** @wixFieldType text */
  eventDescription?: string;
  /** @wixFieldType text */
  financialImpact?: string;
  /** @wixFieldType text */
  resourceImpact?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  evidenceImage?: string;
}


/**
 * Collection ID: dataanalysis
 * Interface for DataandAnalysis
 */
export interface DataandAnalysis {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  chartTitle?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  visualRepresentation?: string;
  /** @wixFieldType text */
  analysisText?: string;
  /** @wixFieldType text */
  dataSourceName?: string;
  /** @wixFieldType url */
  dataSourceUrl?: string;
  /** @wixFieldType datetime */
  datePublished?: Date | string;
}


/**
 * Collection ID: projectsections
 * Interface for ProjectSections
 */
export interface ProjectSections {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  sectionTitle?: string;
  /** @wixFieldType text */
  contentDescription?: string;
  /** @wixFieldType number */
  sectionOrder?: number;
  /** @wixFieldType text */
  shortSummary?: string;
  /** @wixFieldType datetime */
  lastUpdatedDate?: Date | string;
}


/**
 * Collection ID: references
 * Interface for References
 */
export interface References {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  sourceTitle?: string;
  /** @wixFieldType text */
  authorPublisher?: string;
  /** @wixFieldType date */
  publicationDate?: Date | string;
  /** @wixFieldType url */
  sourceLink?: string;
  /** @wixFieldType text */
  documentType?: string;
}
