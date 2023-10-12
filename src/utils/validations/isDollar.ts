const regexValidate = /^(?:\d+)?(?:\.\d{0,2})?$/;

const isDollar = (value: string) => regexValidate.test(value);

export default isDollar;
