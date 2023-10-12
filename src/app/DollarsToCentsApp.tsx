import Button from "@/components/Button";
import Input from "@/components/Input";
import Text from "@/components/Text";
import { Container } from "@/styles/DollarsToCentsApp";
import isDollar from "@/utils/validations/isDollar";
import { useState } from "react";

const DollarsToCentsApp = () => {
  type CoinsOfCentsData = {
    pennies: string;
    nickels: string;
    dimes: string;
    quarters: string;
  };

  const [value, setValue] = useState("");
  const [controlValue, setControlValue] = useState<null | string>(null);
  const [cents, setCents] = useState<number | null>(null);
  const [coinsOfCents, setCoinsOfCents] = useState<CoinsOfCentsData | null>(
    null
  );

  const handleOnChangeText = (text: string) => {
    if (isDollar(text)) {
      setValue(text);
    }
  };

  const convert = () => {
    const nickelValue = 5;
    const dimeValue = 10;
    const quarterValue = 25;

    const convertedCents = parseFloat(
      parseFloat(value).toFixed(2).replace(".", "")
    );

    const quarters = (convertedCents / quarterValue).toFixed(0);
    let rest = convertedCents % quarterValue;
    const dimes = (rest / dimeValue).toFixed(0);
    rest %= dimeValue;
    const nickels = (rest / nickelValue).toFixed(0);
    rest %= nickelValue;
    const pennies = rest.toString();

    setControlValue(value);
    setCents(convertedCents);
    setCoinsOfCents({ quarters, nickels, dimes, pennies });
  };

  return (
    <Container>
      <Input value={value} onChangeText={handleOnChangeText} />
      <Button type="success" onPress={convert} label="Converter" />
      {controlValue && (
        <Text>
          O valor de $ {controlValue} convertido é de {cents} cents ou{" "}
          {coinsOfCents?.quarters} quarters, {coinsOfCents?.dimes} dimes,{" "}
          {coinsOfCents?.nickels} nickels e {coinsOfCents?.pennies} pennies.
        </Text>
      )}
    </Container>
  );
};

export default DollarsToCentsApp;
