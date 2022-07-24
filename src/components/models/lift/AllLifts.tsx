import { Box, Loader, Stack, Text } from '@mantine/core';
import { useQuery } from 'urql';

import type { AllLiftsQuery } from '@/generated/graphql';
import { AllLiftsDocument } from '@/generated/graphql';

export const AllLifts = () => {
  const [result] = useQuery<AllLiftsQuery>({ query: AllLiftsDocument });

  if (result.fetching) return <Loader />;

  if (!result.data || result.data.allLifts.length < 0) return <Text>No lifts found</Text>;

  return (
    <Stack spacing={12}>
      {result.data.allLifts.map((lift) => (
        <Box key={lift.id}>{lift.name}</Box>
      ))}
    </Stack>
  );
};
