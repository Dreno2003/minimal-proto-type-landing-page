import { useState, type FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Waitlist from "@/components/wait-list-dialog/waitlist-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
interface WaitlistDialogProps {
  buttonStyle?: string;
}

const WaitlistDialog: FC<WaitlistDialogProps> = ({ buttonStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog open={isOpen} onOpenChange={(x) => setIsOpen(x)}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size={"lg"}
            className={cn(buttonStyle)}
          >
            Join Waitlist
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          style={{
            zIndex: 100000000000000,
          }}
          className="rounded-none   border-none h-screen  !max-w-screen w-screen"
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size={"icon"}
            variant={"outline"}
            className="rounded-lg  absolute top-4 right-4 hover:!bg-black hover:text-white    shadow-none"
          >
            <XIcon />
          </Button>
          <Waitlist closeDialog={() => setIsOpen(!isOpen)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WaitlistDialog;
