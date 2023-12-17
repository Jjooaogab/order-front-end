import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { LucideIcon } from "lucide-react";
import { ElementType, useState } from "react";

export const ModalCreate = (
  {
    icon: Icon,
  }
    :
    {
      icon: ElementType | LucideIcon;
    }
) => {

  const [valueInput, setValueInput] = useState<string>('')
  const [nameInput, setNameInput] = useState<string>('')
  const [imgInput, setImgInput] = useState<string>('')

  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center p-2 bg-zinc-800 text-zinc-200 rounded-full mx-8" ><Icon /></DialogTrigger>
      <DialogContent>
        <Card className="mt-4">
          <CardContent className="flex flex-col">
            <CardHeader>Digite as informações do novo produto.</CardHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="name">Nome do produto</Label>
                <Input placeholder="ex.: Carne | 1kg" id="name"
                  value={nameInput}
                  onChange={(e) => {
                    setNameInput(e.target.value)
                  }}
                ></Input>
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="value">Valor do produto</Label>
                <Input placeholder="ex.: 89.99" id="value"
                  value={valueInput}
                  onChange={(e) => {
                    setValueInput(e.target.value)
                  }}
                ></Input>
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="img">Imagem do produto</Label>
                <Input placeholder="ex.: https://imgur.com/images/example" id="img"
                  value={imgInput}
                  onChange={(e) => {
                    setImgInput(e.target.value)
                  }}
                ></Input>
              </div>
              <Button
                onClick={async () => {
                  const res = await axios.post('http://localhost:8000/product', {
                    name: nameInput,
                    value: valueInput,
                    productImg: imgInput
                  })
                  window.location.reload()
                }}
              >Criar produto</Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}