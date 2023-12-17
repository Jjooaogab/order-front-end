import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { LucideIcon } from "lucide-react";
import { ElementType, useState } from "react";

export const ModalEdit = (
  {
    icon: Icon,
    id,
    name,
    value,
    image
  }
    :
    {
      icon: ElementType | LucideIcon;
      id: string;
      name: string;
      value: number;
      image: string;
    }
) => {
  const [nameInput, setNameInput] = useState<string>(name)
  const [valueInput, setValueInput] = useState<string>(value.toString())

  return (
    <Dialog>
      <DialogTrigger><Icon /></DialogTrigger>
      <DialogContent>
        <Card className="mt-4">
          <CardContent className="flex flex-col gap-4">
            <div className="">
              <div className="flex flex-col pt-4">
                <span className="text-zinc-400 text-xs">Nome atual: {name}</span>
                <Label htmlFor="name">Novo nome do produto</Label>
                <Input placeholder="ex.: Carne | 1kg" id="name"
                  value={nameInput}
                  onChange={(e) => {
                    setNameInput(e.target.value)
                  }}
                ></Input>
              </div>
              <div className="flex flex-col pt-2">
                <span className="text-zinc-400 text-xs">Valor atual: {value}</span>
                <Label htmlFor="value">Novo valor do produto</Label>
                <Input placeholder="ex.: 89.99" id="value"
                  value={valueInput}
                  onChange={(e) => {
                    setValueInput(e.target.value)
                  }}
                ></Input>
              </div>
            </div>
            <Button onClick={async () => {
              const edit = await axios.put(`http://localhost:8000/product/${id}`, {
                name: nameInput,
                value: valueInput
              })
              console.log([edit, nameInput, valueInput])
            }}>Confirmar</Button>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
