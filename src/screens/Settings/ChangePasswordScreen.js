import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MainButton from "../../components/global/MainButton";
import NewInput from "../../components/global/NewInput";
import PasswordstrengthBar from "../../components/global/PasswordstrengthBar";
import { changePassword } from "../../Utils/getPassword";
import SettingsModal from "../../components/Settings/SettingsModal";
import LoadingModal from "../../components/global/LoadingModal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ChangePasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword_error, setOldPassword_error] = useState("");
  const [newPassword_error, setNewPassword_error] = useState("");
  const [confirmPassword_error, setConfirmPassword_error] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setmodalMessage] = useState("");

  const changeAccountPassword = () => {
    setLoading(true);
    changePassword(oldPassword, newPassword, confirmPassword).then((result) => {
      if (result.status == "409")
        setmodalMessage("Old Password Dosen't Match!");
      else setmodalMessage("Changed Successfully!");

      setLoading(false);
      setModalVisible(true);
    });
  };
  const validate = () => {
    let error = true;
    if (oldPassword == "") {
      setOldPassword_error("Please enter your Current Password");
      error = false;
    }

    if (newPassword == "") {
      setNewPassword_error("Please enter a password");
      error = false;
    } else {
      if (newPassword.length < 8) {
        setNewPassword_error("Must Be 8 Characters Or More");
        error = false;
      } else setNewPassword_error("");
    }
    if (confirmPassword == "") {
      setConfirmPassword_error("Please confirm your Password");
      error = false;
    } else {
      if (newPassword != confirmPassword) {
        setConfirmPassword_error("Passwords don't match");
        error = false;
      } else setConfirmPassword_error("");
    }
    return error;
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.blueBackground}>
          <Text style={styles.hText}>Change Password</Text>
        </View>
        <LoadingModal modalVisible={loading} />
        <SettingsModal modalVisible={modalVisible} message={modalMessage} />
        <View style={styles.container}>
          <View marginTop="10%">
            <NewInput
              marginBottom="3.2%"
              placeholder="Current password"
              secureTextEntry={true}
              placeholderTextColor="#B3B9C2"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
              value={oldPassword}
              onChangeText={(text) => setOldPassword(text)}
              errorText={oldPassword_error}
            />

            <NewInput
              placeholder="New password"
              secureTextEntry={true}
              placeholderTextColor="#B3B9C2"
              autoCorrect={false}
              autoCapitalize="none"
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
              errorText={newPassword_error}
            />
            <View style={styles.passwordBar}>
              <PasswordstrengthBar password={newPassword} />
            </View>

            <NewInput
              placeholder="Confirm password"
              secureTextEntry={true}
              placeholderTextColor="#B3B9C2"
              autoCorrect={false}
              autoCapitalize="none"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              errorText={confirmPassword_error}
            />
          </View>
          <MainButton
            style={styles.changeBTN}
            onPress={() => {
              if (validate()) {
                changeAccountPassword();
              }
              setModalVisible(false);
            }}
          >
            Change Password
          </MainButton>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  blueBackground: {
    backgroundColor: "#7598BA",
    height: Dimensions.get("window").height * 0.3,
    borderBottomLeftRadius: 70,
  },
  hText: {
    fontSize:
      40 *
      Math.min(
        Dimensions.get("window").height / 800.0,
        Dimensions.get("window").width / 375.0
      ),
    color: "white",
    fontFamily: "Montserrat_bold",
    marginTop: "25%",
    alignSelf: "center",
  },
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  changeBTN: {
    marginTop: "9%",
  },
  passwordBar: {
    // width: "210%",
    marginBottom: "2%",
  },
});

export default ChangePasswordScreen;
