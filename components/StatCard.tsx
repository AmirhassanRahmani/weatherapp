"use client";

import { Text, Metric, Card, Color } from "@tremor/react";

type Props = {
  title: string;
  metric: string;
  color?: Color;
};

function StatCard({ title, metric, color }: Props) {
  return (
    <Card decorationColor={color} decoration="top">
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default StatCard;
