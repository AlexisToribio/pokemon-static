const wordCapitalize = (name: string): string => {
  return name[0].toUpperCase() + name.substring(1);
};

const textTransform = { wordCapitalize };

export default textTransform;
