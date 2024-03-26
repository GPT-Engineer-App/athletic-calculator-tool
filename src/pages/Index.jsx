import React, { useState } from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button, Grid, Image } from "@chakra-ui/react";

const Index = () => {
  const [explosivePower, setExplosivePower] = useState("");
  const [maximalStrength, setMaximalStrength] = useState("");
  const [endurance, setEndurance] = useState("");
  const [workoutSuggestions, setWorkoutSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate workout suggestions based on input data
    const suggestions = [];

    if (explosivePower) {
      suggestions.push("Plyometric exercises: Box jumps, bounding, and depth jumps to improve explosive power.");
      suggestions.push("Speed work: Sprints, agility drills, and resistance band exercises to enhance rate of force development.");
    }

    if (maximalStrength) {
      suggestions.push("Strength-building protocols: Heavy resistance training with compound exercises like squats, deadlifts, and bench press.");
      suggestions.push("Progressive overload: Gradually increase weight, sets, or reps to stimulate maximal strength gains.");
    }

    if (endurance) {
      suggestions.push("Conditioning programs: High-intensity interval training (HIIT) and circuit training to improve cardiovascular endurance.");
      suggestions.push("Long-duration, low-intensity training: Steady-state cardio like running, cycling, or swimming to build aerobic capacity.");
    }

    setWorkoutSuggestions(suggestions);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Athletic Calculator
      </Heading>
      <Grid templateColumns="1fr 1fr" gap={8}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmd8ZW58MHx8fHwxNzExNDI2NzAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Athlete Training" mb={8} />
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Explosive Power (Rate)</FormLabel>
                <Input type="number" value={explosivePower} onChange={(e) => setExplosivePower(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Maximal Strength (Magnitude)</FormLabel>
                <Input type="number" value={maximalStrength} onChange={(e) => setMaximalStrength(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Endurance (Duration)</FormLabel>
                <Input type="number" value={endurance} onChange={(e) => setEndurance(e.target.value)} />
              </FormControl>
              <Button type="submit" colorScheme="blue">
                Analyze Performance
              </Button>
            </VStack>
          </form>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Workout Suggestions
          </Heading>
          {workoutSuggestions.map((suggestion, index) => (
            <Text key={index} mb={2}>
              {suggestion}
            </Text>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default Index;
