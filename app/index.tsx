import {
  Box,
  ScrollView,
  Text,
  VStack,
  Avatar,
  HStack,
  Icon
} from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import BottomNavigation from "@/components/BottomNavigation";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Home() {
  return (
    <Box flex={1} backgroundColor="$white">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box mt="$24" justifyContent="center" alignItems="center">
          <Text size="2xl">THE COMPANY</Text>
          <Box justifyContent="center" mt="$32">
            <VStack space="xs" reversed={false}>
              <Text textAlign="center" fontSize={40} fontWeight="$bold">
                09:12
              </Text>
              <Text textAlign="center">Rabu, Dec 2024</Text>
            </VStack>
            <TouchableOpacity onPress={() => console.log("click clock in")}>
              <Avatar
                bgColor="$blue400"
                sx={{ width: 200, height: 200 }}
                borderRadius="$full"
                mt="$12"
              >
                <VStack space="xs" reversed={false}>
                  <Icon as={MaterialIcons} name="ads-click" size={80} color="white"/>
                  <Text
                    textAlign="center"
                    fontSize={20}
                    fontWeight="$bold"
                    color="$white"
                  >
                    CLOCK IN
                  </Text>
                </VStack>
              </Avatar>
            </TouchableOpacity>
          </Box>
          <Text textAlign="center" mt="$8" fontSize="$sm">
            Location: Graha Pena Batam Center
          </Text>
          <HStack
            space="4xl"
            reversed={false}
            mt="$40"
            sx={{
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <VStack space="xs" reversed={false}>
              <Text textAlign="center" fontSize={20} fontWeight="$bold">
                09:10
              </Text>
              <Text textAlign="center" fontSize={12} fontWeight="$bold">
                Clock In
              </Text>
            </VStack>
            <VStack space="xs" reversed={false}>
              <Text textAlign="center" fontSize={20} fontWeight="$bold">
                09:10
              </Text>
              <Text textAlign="center" fontSize={12} fontWeight="$bold">
                Clock Out
              </Text>
            </VStack>
            <VStack space="xs" reversed={false}>
              <Text textAlign="center" fontSize={20} fontWeight="$bold">
                09:10
              </Text>
              <Text textAlign="center" fontSize={12} fontWeight="$bold">
                Working Hr's
              </Text>
            </VStack>
          </HStack>
        </Box>
      </ScrollView>
      <BottomNavigation
        navigation=""
        onTabPress={() => console.log("onTabPress")}
      />
    </Box>
  );
}
