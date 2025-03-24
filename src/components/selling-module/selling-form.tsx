"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import { Mail, Phone, User, Home, MapPin, Bed, Bath, Building, DollarSign, Calendar, Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Please enter your property address." }),
  bedrooms: z.string().min(1, { message: "Please select the number of bedrooms." }),
  bathrooms: z.string().min(1, { message: "Please select the number of bathrooms." }),
  floors: z.string().min(1, { message: "Please select the number of floors." }),
  area: z.string().min(1, { message: "Please enter the property area." }),
  yearBuilt: z.string().min(4, { message: "Please enter the year built." }),
  askingPrice: z.string().min(1, { message: "Please enter your asking price." }),
  features: z.array(z.string()).optional(),
  additionalInfo: z.string().optional(),
})

const propertyFeatures = [
  { id: "garage", label: "Garage" },
  { id: "yard", label: "Yard" },
  { id: "pool", label: "Swimming Pool" },
  { id: "basement", label: "Basement" },
  { id: "renovated", label: "Recently Renovated" },
  { id: "fireplace", label: "Fireplace" },
  { id: "central-ac", label: "Central AC" },
  { id: "deck-patio", label: "Deck/Patio" },
]

export default function SellerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      bedrooms: "",
      bathrooms: "",
      floors: "",
      area: "",
      yearBuilt: "",
      askingPrice: "",
      features: [],
      additionalInfo: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Form submitted!",
        description: "We'll contact you soon to discuss selling your property.",
      })
      form.reset()
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Sell Your Property</CardTitle>
        <CardDescription>Provide details about your property and we&apos;ll help you find the right buyer.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <User className="ml-3 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="John Doe" className="border-0 focus-visible:ring-0" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <Mail className="ml-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="john.doe@example.com"
                            className="border-0 focus-visible:ring-0"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <Phone className="ml-3 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="(123) 456-7890" className="border-0 focus-visible:ring-0" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Property Details</h3>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Address</FormLabel>
                    <FormControl>
                      <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                        <MapPin className="ml-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="123 Main St, City, State, ZIP"
                          className="border-0 focus-visible:ring-0"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bedrooms</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <div className="flex items-center">
                              <Bed className="mr-2 h-4 w-4 text-muted-foreground" />
                              <SelectValue placeholder="Select" />
                            </div>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5+">5+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bathrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bathrooms</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <div className="flex items-center">
                              <Bath className="mr-2 h-4 w-4 text-muted-foreground" />
                              <SelectValue placeholder="Select" />
                            </div>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="1.5">1.5</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="2.5">2.5</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="3+">3+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="floors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Floors</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <div className="flex items-center">
                              <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                              <SelectValue placeholder="Select" />
                            </div>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4+">4+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Area (sq ft)</FormLabel>
                      <FormControl>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <Home className="ml-3 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="e.g., 2000" className="border-0 focus-visible:ring-0" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yearBuilt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year Built</FormLabel>
                      <FormControl>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <Calendar className="ml-3 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="e.g., 2005" className="border-0 focus-visible:ring-0" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="askingPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asking Price</FormLabel>
                      <FormControl>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                          <DollarSign className="ml-3 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="e.g., 500,000" className="border-0 focus-visible:ring-0" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="features"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Property Features</FormLabel>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {propertyFeatures.map((feature) => (
                        <FormField
                          key={feature.id}
                          control={form.control}
                          name="features"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={feature.id}
                                className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-2"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(feature.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...(field.value || []), feature.id])
                                        : field.onChange(field.value?.filter((value) => value !== feature.id))
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">{feature.label}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any other details about your property that might help potential buyers?"
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Submit Property
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

