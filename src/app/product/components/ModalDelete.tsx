import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import axios from "axios";
import { LucideIcon } from "lucide-react";
import { ElementType, useState } from "react";

export const ModalDelete = (
  {
    icon: Icon,
    id,
  }
    :
    {
      icon: ElementType | LucideIcon;
      id: string;
    }
) => {

  return (
    <Dialog>
      <DialogTrigger><Icon /></DialogTrigger>
      <DialogContent>
        <DialogHeader className="font-semibold text-lg text-red-800">Você realmente deseja apagar esse produto? </DialogHeader>
        <Button onClick={async () => {
          const deleted = await axios.delete(`http://localhost:8000/product/${id}`)
          if (deleted.status == 200) {
            window.location.reload();
          } else {
            alert('error')
          }
        }}>Confirmar</Button>
      </DialogContent>
    </Dialog>
  )
}

