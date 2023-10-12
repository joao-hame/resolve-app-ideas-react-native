import { Link, LinkProps } from "expo-router";
import {
  FlatList,
  View,
  ListRenderItemInfo,
  TouchableOpacity,
} from "react-native";
import Text from "../components/Text";

const Home = () => {
  type LinkHrefProps = LinkProps<"">["href"];
  const BeginnerHrefList: LinkHrefProps[] = ["/Bin2Dec", "/DollarsToCentsApp"];
  const renderItem = ({ item }: ListRenderItemInfo<LinkHrefProps>) => {
    return (
      <Link href={item} asChild>
        <TouchableOpacity>
          <View>
            <Text>{item}</Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View>
      <FlatList data={BeginnerHrefList} renderItem={renderItem} />
    </View>
  );
};

export default Home;
