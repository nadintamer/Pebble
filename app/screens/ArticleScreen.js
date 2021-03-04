import React from 'react';
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, Video, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ArticleScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.homeContainer}>
            <Image style={styles.image} source={require("../../assets/images/communication.png")}></Image>

    <Text style={styles.content}>The best way to be a good parent to your child is to nurture fun, friendship, teamwork, and intimacy in your own relationship as a couple. This creates an environment that helps ensure a good outcome for your child. 

    · Try not to keep your concerns to yourself.
    Share your thoughts, hopes, and fears with
    each other.

    · Talk about what it will be like to be a 
    parent. Talk about the challenges you may    
    confront, like work and child-care issues. 
    
     · Discuss your expectations, values, beliefs.

·       Write down a job description for yourself and for your partner and then compare your expectations. You may be surprised at your differing perceptions.

·       Use creative problem solving. Discuss each other's point of view, during which time the problem will likely disappear; decide which problem you are really addressing; brainstorm on solutions, without limits; settle on one solution and on how long to try it before evaluating whether it is working.

·       Work on communicating clearly with each other by rewording your partner's statements back to him or her. You will not always arrive at agreement, but each of you will know your concerns have been heard.

·       Talk about how each of you deals with anger and conflict. Learn to use the timeout method to pause and regroup when less emotions are involved.

·       When giving either criticism or praise, try to be specific. Tell your spouse specifically what bothers you, and what pleases you.

·       Protect your times of fun and intimacy from problem solving. Arrange a regular couple meeting time that each of you knows you can count on to bring up issues and do the "work" of the relationship.

·       Make time for the activities that keep your own battery charged. Have your "me" time. Having time for your own interests becomes even more important after you become a parent.

·       Mothers need to let fathers be involved. The woman has to involve the man in the experience of pregnancy; the baby is not as real to him as it is to the woman experiencing all the changes of pregnancy. Do not assume that motherhood comes naturally. Share your insecurities and show confidence in your partner's ability to be a good and nurturing parent.

·       Anticipate stress and exhaustion. They are an inevitable part of being new parents. Eat well, exercise, take time for yourself, and recruit a support network.</Text>
</SafeAreaView>
</ScrollView>

  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
},
image: {
  alignItems: 'stretch',
  flexDirection: 'column',
  backgroundColor: Colors.lightPurple,
  height: windowHeight * 0.25,
  width: windowWidth,
},
content: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'NunitoSans_400Regular'
}
});