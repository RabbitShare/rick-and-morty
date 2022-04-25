import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCharactersLazyQuery } from './__generated__/query';

type FormValues = {
  name: string;
  status: 'Alive' | 'Dead' | 'unknown' | '';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown' | '';
};

const defaultValues: FormValues = {
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
};

export const useCharactersFilter = () => {
  const [filter, setFilter] = useState<FormValues & { page: number }>({
    ...defaultValues,
    page: 1,
  });
  const [getChagacters, { data, loading }] = useCharactersLazyQuery();
  const [maxPage, setMaxPage] = useState(1);

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  useEffect(() => {
    setMaxPage((prevMaxPage) => {
      const count = data?.characters?.info?.count;
      if (!count) return prevMaxPage;
      return Math.ceil(count / 20);
    });
  }, [data]);

  useEffect(() => {
    const { page, ...filtredValues } = filter;
    getChagacters({ variables: { filter: { ...filtredValues }, page } });
  }, [filter]);

  const onSubmit = (values: FormValues) => {
    setFilter({ ...values, page: 1 });
  };

  const handlePageChange = (page: number) => {
    const newPage = page < 1 ? 1 : page > maxPage ? maxPage : page;
    if (filter.page === newPage) return;
    setFilter({ ...filter, page: newPage });
  };
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    handlePageChange,
    values: {
      ...filter,
      maxPage,
      characters: data?.characters?.results,
      loading,
    },
  };
};
