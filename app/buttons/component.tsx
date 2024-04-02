import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="flex flex-col space-y-4 p-4 max-w-[200px]">
      <Button> Default </Button>
      <Button variant={"primary"}> Primary </Button>
      <Button variant={"primaryOutline"}> Primary Outline </Button>
      <Button variant={"secondary"}> Secondary </Button>
      <Button variant={"secondaryOutline"}> SecondaryOutline </Button>
      <Button variant={"danger"}> Danger </Button>
      <Button variant={"dangerOutline"} > DangerOutline </Button>
    </div>
  );
}
export default ButtonsPage