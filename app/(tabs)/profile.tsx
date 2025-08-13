import { View, Text, Button, ActivityIndicator } from "react-native";
import React from "react";
import { pingAppwrite } from "@/lib/appwrite";

const Profile = () => {
  const [status, setStatus] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);

  const onPing = async () => {
    setLoading(true);
    setStatus("");
    const res = await pingAppwrite();
    if (res.ok) {
      setStatus(`Appwrite reachable ✓ (latency ${res.latencyMs} ms)`);
    } else {
      setStatus(`Appwrite unreachable ✗: ${res.error}`);
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Profile</Text>
      <Button title="Ping Appwrite" onPress={onPing} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{ paddingTop: 8 }}>{status}</Text>
      )}
    </View>
  );
};
export default Profile;
