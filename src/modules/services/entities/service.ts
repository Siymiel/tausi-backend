import { Service } from '../types';

export function BuildMakeService(){
  return (service:Service) => {
    const { name, description } = service;

    if (!name || name.trim().length === 0) {
      throw new Error('Service name is required');
    }
    return Object.freeze({
      getName: () => name,
      getDescription: () => description
    });
  };
}
