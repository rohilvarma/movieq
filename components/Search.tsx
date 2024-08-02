import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div className="absolute right-0">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Search</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>
              Search any movies or series that you fancy by the title. Note:
              Incorrect names would not yield a match.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Search;
