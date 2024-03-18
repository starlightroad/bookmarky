export type CategoriesProps = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export type CategoriesTable = {
  query: string;
  currentPage: number;
};

export type FormState = {
  message?: string | null;
  errors?: {};
};

export type CategoryForm = {
  message?: string | null;
  errors?: {
    name?: string[];
  };
};
