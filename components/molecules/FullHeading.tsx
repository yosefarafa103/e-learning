import { Separator } from "../ui/separator";
type Props = {
  desc: string;
  lanKey?: string;
};

const FullHeading = ({ desc, lanKey }: Props) => {
  return (
    <>
      <section className="flex flex-col gap-3 mb-5">
        <h4 className="text-3xl text-indigo-600 font-semibold">
          {`${lanKey}`}
        </h4>
        <p className="text-sm text-gray-500 font-semibold"> {desc} </p>
      </section>
      <Separator />
    </>
  );
};

export default FullHeading;
