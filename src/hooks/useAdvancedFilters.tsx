import { useState } from "react";

export function UseAdvancedFilters() {
  const [color, setColor] = useState<string | null>(null);
  const [types, setTypes] = useState<string[]>([]);
  const [minWeight, setMinWeight] = useState<number | null>(null);
  const [maxWeight, setMaxWeight] = useState<number | null>(null);
  const [isABaby, setIsABaby] = useState<boolean | null>(null);

  const handleColorChange = (newColor: string | null) => {
    setColor(newColor);
  };

  const handleAddType = (newType: string | null) => {
    const updatedTypeArray = types.slice();
    if (
      newType !== null &&
      !updatedTypeArray.some((type) => type === "newType")
    ) {
      updatedTypeArray.push(newType);
    }
    setTypes(updatedTypeArray);
  };

  const handleRemoveType = (deletedType: string | null) => {
    if (deletedType === "all") {
      setTypes([]);
    } else if (deletedType !== null) {
      const updatedTypeArray = types.filter((type) => type !== deletedType);
      setTypes(updatedTypeArray);
    }
  };

  const handleMinWeigth = (newWeight: number | null) => {
    setMinWeight(newWeight);
  };

  const handleMaxWeigth = (newWeight: number | null) => {
    setMaxWeight(newWeight);
  };

  const handleAgeChange = (newIsBaby: boolean | null) => {
    setIsABaby(newIsBaby);
  };

  return {
    color,
    handleColorChange,
    types,
    handleAddType,
    handleRemoveType,
    minWeight,
    handleMinWeigth,
    maxWeight,
    handleMaxWeigth,
    isABaby,
    handleAgeChange,
  };
}
