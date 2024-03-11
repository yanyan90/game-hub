import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlateformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  if (error) return null;

  const handleSelectPlatform = (platform: Platform) => {
    setSelectedPlatform(platform);
    onSelectPlatform(platform);
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {" "}
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => handleSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlateformSelector;
