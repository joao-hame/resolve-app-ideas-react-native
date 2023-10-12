import { ListRenderItemInfo, TouchableOpacity, Alert } from "react-native";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import Icon from "../components/Icon";
import colors from "../constants/colors";
import {
  ActionButtonsContainer,
  ButtonContainer,
  Container,
  FlatList,
  InputFlatListItemSeparator,
  ResolveFlatListItemSeparator,
} from "@/styles/Bin2Dec";

const Bin2Dec = () => {
  type InputValueData = {
    value: string;
    error?: string;
  };

  type ResolveData = {
    binary: string;
    decimal: number;
  };

  const [inputValueList, setInputValueList] = useState<InputValueData[]>([
    { value: "" },
  ]);
  const [resolveList, setResolveList] = useState<ResolveData[]>([]);

  const handleOnChangeText = (value: string, index: number) => {
    setInputValueList((prevList) => {
      const newList = [...prevList];
      newList[index] = { value };
      return newList;
    });
  };

  const handleButtonPress = () => {
    const binRegex = /^[01]+$/;

    const updatedInputValueList = [...inputValueList];

    const newResolveList: ResolveData[] = [];

    inputValueList.forEach((item, index) => {
      if (binRegex.test(item.value) === false) {
        updatedInputValueList[index].error =
          item.value === "" ? "O campo está vazio" : "O valor é inválido";
        return;
      }

      newResolveList.push({
        binary: item.value,
        decimal: parseInt(item.value, 2),
      });
    });

    setResolveList(newResolveList);
  };

  const RemoveValueButton = ({ index }: { index: number }) => {
    const disabled = inputValueList.length === 1;

    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={() =>
          setInputValueList((prevList) =>
            prevList.filter((_, itemIndex) => itemIndex !== index)
          )
        }
      >
        <Icon
          name="remove-circle"
          color={disabled ? colors.danger_low : colors.danger_base}
          size="md"
        />
      </TouchableOpacity>
    );
  };

  const InputRenderItem = ({
    item,
    index,
  }: ListRenderItemInfo<InputValueData>) => (
    <Input
      value={item.value}
      onChangeText={(value) => handleOnChangeText(value, index)}
      maxLength={8}
      keyboardType="decimal-pad"
      placeholder="Insira o valor binário"
      error={item.error}
      rightComponent={<RemoveValueButton index={index} />}
    />
  );

  const ResolveItemRenderItem = ({ item }: ListRenderItemInfo<ResolveData>) => {
    return (
      <Text>
        Binário: {item.binary} - Decimal: {item.decimal}
      </Text>
    );
  };

  return (
    <Container>
      <FlatList
        data={inputValueList}
        renderItem={InputRenderItem}
        ItemSeparatorComponent={InputFlatListItemSeparator}
      />
      <ActionButtonsContainer>
        <ButtonContainer>
          <Button
            label="Limpar Lista"
            type="danger"
            onPress={() =>
              Alert.alert("Atenção", "Gostaria de limpar todos os campos?", [
                { text: "Voltar", style: "default" },
                {
                  text: "Limpar",
                  style: "destructive",
                  onPress: () => {
                    setInputValueList([{ value: "" }]);
                  },
                },
              ])
            }
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button
            label="Adicionar Campo"
            type="new"
            onPress={() =>
              setInputValueList((prevList) => [...prevList, { value: "" }])
            }
          />
        </ButtonContainer>
      </ActionButtonsContainer>

      <Button
        label="Converter em Decimal"
        type="success"
        onPress={handleButtonPress}
      />

      <FlatList
        data={resolveList}
        renderItem={ResolveItemRenderItem}
        ItemSeparatorComponent={ResolveFlatListItemSeparator}
      />

      <Button
        type="danger"
        label="Limpar Lista"
        disabled={resolveList.length === 0}
        onPress={() => {
          Alert.alert("Atenção", "Gostaria de limpar a lista de resultados?", [
            { text: "Voltar", style: "default" },
            {
              text: "Limpar",
              style: "destructive",
              onPress: () => {
                setResolveList([]);
              },
            },
          ]);
        }}
      />
    </Container>
  );
};

export default Bin2Dec;
