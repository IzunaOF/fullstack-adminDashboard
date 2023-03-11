import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetGeographyQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title={"GEOGRAPHY"}
        subtitle="Find where your users are located."
      />
      <Box
        mt={"40px"}
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? (
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main,
                },
              },
            }}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 60]}
            unknownColor="#5e5e5e"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={160}
            projectionTranslation={[0.5, 0.6]}
            projectionRotation={[0, 0, 0]}
            enableGraticule={true}
            graticuleLineWidth={0}
            graticuleLineColor="#a26d6d"
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 62,
                translateY: -21,
                itemsSpacing: 13,
                itemWidth: 99,
                itemHeight: 17,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary[200],
                itemOpacity: 0.85,
                symbolSize: 29,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.background.alt,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>isLoading{isLoading}</>
        )}
      </Box>
    </Box>
  );
};

export default Geography;
