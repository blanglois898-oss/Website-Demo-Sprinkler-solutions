import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Droplets, Wrench, CalendarCheck, Cpu, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function NorcalSprinklerWebsite() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      <header className="bg-green-700 text-white p-6 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Sprinkler Solutions Logo"
              className="h-12 w-auto bg-white rounded p-1"
            />
            <div>
              <h1 className="text-2xl font-bold">NorCal Sprinkler Solutions</h1>
              <p className="text-sm">CSLB C-27 #895440</p>
            </div>
          </div>

          <Button className="bg-white text-green-700 font-semibold">
            <Phone className="mr-2 h-4 w-4" /> 916-234-3901
          </Button>
        </div>
      </header>

      <section className="py-20 text-center bg-green-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4"
        >
          <img
            src="/logo.png"
            alt="Sprinkler Solutions"
            className="mx-auto h-32 mb-6"
          />

          <h2 className="text-4xl font-bold mb-4">Professional Irrigation Maintenance & Repair</h2>
          <p className="text-lg mb-6">
            "Water Right" with expert sprinkler maintenance, repairs, smart
            controller upgrades, and irrigation consulting throughout Northern
            California.
          </p>

          <Button size="lg" className="text-lg">
            <Phone className="mr-2 h-5 w-5" /> Call 916‑234‑3901
          </Button>
        </motion.div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 text-center">
            <Droplets className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Maintenance</h3>
            <p>
              Regular sprinkler inspections and seasonal adjustments to keep
              irrigation systems running efficiently and landscapes healthy.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 text-center">
            <Wrench className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Sprinkler Repair</h3>
            <p>
              Fast repair of broken heads, valves, leaks, wiring issues, and
              irrigation controller problems.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 text-center">
            <Cpu className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Smart Controllers</h3>
            <p>
              Upgrade your irrigation system with modern smart controllers that
              save water and automate watering schedules.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 text-center">
            <Search className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Water Auditing</h3>
            <p>
              Identify water waste and optimize irrigation performance to lower
              water bills and improve coverage.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 text-center">
            <CalendarCheck className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Consulting</h3>
            <p>
              Professional irrigation consulting for homeowners, property
              managers, and landscaping professionals.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Keep Your Lawn & Garden Pristine</h2>
          <p className="mb-6">
            NorCal Sprinkler Solutions specializes in irrigation maintenance,
            repairs, smart system upgrades, and water efficiency services. Our
            mission is simple — keep landscapes healthy while helping customers
            conserve water.
          </p>

          <Button size="lg" className="text-lg">
            <Phone className="mr-2 h-5 w-5" /> Schedule Service
          </Button>
        </div>
      </section>

      <footer className="bg-green-700 text-white text-center p-6 mt-10">
        <p className="font-semibold">NorCal Sprinkler Solutions</p>
        <p>916-234-3901</p>
        <p>Licensed Contractor CSLB C‑27 #895440</p>
        <p className="mt-2">© {new Date().getFullYear()} NorCal Sprinkler Solutions</p>
      </footer>
    </div>
  );
}
