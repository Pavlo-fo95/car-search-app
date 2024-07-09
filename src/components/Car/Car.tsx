export interface Car {
    id: string;
    vin: string;
    region: string;
    price: number;
    photoUrl: string;
    operation: {
      group: string;
      code: number;
      title_ru: string | null;
      title_uk: string;
    };
    department: {
      title: string;
      address: string | null;
    };
    registered_at: string;
    model_year: number;
    notes: string;
    [key: string]: any;
  }