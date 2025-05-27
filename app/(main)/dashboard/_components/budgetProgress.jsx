"use client";

import { updateBudget } from "@/actions/budget";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import useFetch from "@/hooks/useFetch";
import { Check, Pencil, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const BudgetProgress = ({ initialBudget, currentExpenses }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(
    initialBudget?.amount.toString() || ""
  );

  const percentUsed = initialBudget
    ? (currentExpenses / initialBudget.amount) * 100
    : 0;

  const {
    loading: isLoading,
    fn: updateBudgetFn,
    data: updatedBudget,
    error,
  } = useFetch(updateBudget);

  const handleUpdateBudget = async () => {
    const amount = parseFloat(newBudget);

    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid budget amount");
      return;
    }

    await updateBudgetFn(amount);
  };

  useEffect(() => {
    if (updatedBudget?.success) {
      setIsEditing(false);
      toast.success("Budget updated successfully");
    } else if (error) {
      toast.error(error || "Failed to update budget");
    }
  }, [updatedBudget, error]);

  const handleCancel = () => {
    setNewBudget(initialBudget?.amount?.toString() || "");
    setIsEditing(false);
  };

  return (
    <Card className="my-4 mb-7">
      <CardHeader className=" pb-2">
        <CardTitle>Monthly Budget (Default Account)</CardTitle>
        <div className="pl-5">
          {isEditing ? (
            <div className="flex items-center gap-1">
              <Input
                className="w-32"
                placeholder="Enter Amount"
                type="number"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                onClick={handleUpdateBudget}
              >
                <Check className="h-4 w-4 text-green-500" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                onClick={handleCancel}
              >
                <X className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <CardDescription>
                {initialBudget
                  ? `${currentExpenses.toFixed(
                      2
                    )} of ${initialBudget.amount.toFixed(2)}`
                  : "No Budget Set"}
              </CardDescription>
              <Button
                variant="ghost"
                className="cursor-pointer"
                size="icon"
                onClick={() => setIsEditing(true)}
              >
                <Pencil className="cursor-pointer h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {initialBudget && (
          <div className="px-6 space-y-2">
            <Progress
              value={percentUsed > 100 ? 100 : percentUsed}
              bgStyles={`${
                percentUsed >= 90
                  ? "bg-red-600"
                  : percentUsed >= 75
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            />
            <p className="text-sm text-muted-foreground text-right">
              {percentUsed.toFixed(1)}% used
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;
