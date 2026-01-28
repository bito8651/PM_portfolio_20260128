
export interface Skill {
  id: string;
  name: string;
  icon: string;
}

export interface DesignItem {
  id: string;
  url: string;
  title: string;
}

export interface ComparisonItem {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
}

export interface EngagementPost {
  id: string;
  url: string;
  caption: string;
}

export interface PdfItem {
  id: string;
  thumbnail: string;
  pdfUrl: string;
  title: string;
}
