export type SearchParamsProp = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export type TableProps = {
  query: string;
  currentPage: number;
};

export type FormState<Errors = {}> = {
  message?: string | null;
  errors?: Errors;
};

export type BookmarkState = FormState<{
  title?: string[];
  location?: string[];
  categoryId?: string[];
}>;

export type CategoryState = FormState<{
  name?: string[];
}>;
