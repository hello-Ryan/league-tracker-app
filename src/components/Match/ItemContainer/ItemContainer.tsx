import Image from "next/image";

export interface ItemContainerProps {
  trinket: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
}

const ItemContainer = ({
  trinket,
  item0,
  item1,
  item2,
  item3,
  item4,
  item5,
}: ItemContainerProps) => {
  const items = [item0, item1, item2, item3, item4, item5];

  return (
    <div className="grid grid-flow-row grid-cols-7 grid-rows-1">
      {items.map((item, index) =>
        item !== 0 ? (
          <div key={index}>
            <Image
              src={`/dragontail-13.9.1/13.9.1/img/item/${item}.png`}
              alt={item.toString()}
              width={24}
              height={24}
              className="rounded-md"
            />
          </div>
        ) : (
          <div key={index} className="bg-gray-400 rounded-md opacity-50"></div>
        )
      )}
      <Image
        src={`/dragontail-13.9.1/13.9.1/img/item/${trinket}.png`}
        alt={trinket.toString()}
        width={24}
        height={24}
        className="rounded-full"
      />
    </div>
  );
};

export default ItemContainer;
