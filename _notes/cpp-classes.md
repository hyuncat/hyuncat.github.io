---
title: "C++ Classes"
collection: notes
layout: single
tags:
    - C++
    - OOP
---
C++ header files, private/public member variables and methods.

## Syntax

**Syntax:** A normal C++ class, defined inline
```
class ClassName {
private:
	// private member variables and methods
public:
	// public member variables and methods
}
```

- **private:** Variables and functions defined within this scope are only accessible within the class itself
- **public:** Variables and functions accessible outside the class

### What if we have separate .h / .cpp files?

The point of separating header files is to allow you to make changes to the implementation details (C++ file) without recompiling dependent code if the interface (defined by header file) stays the same
#### Header file
**Example:** ClusterManager.h
```
#ifndef CLUSTER_MANAGER_H  // Include guard to prevent multiple inclusions
#define CLUSTER_MANAGER_H

#include <unordered_map>
#include <unordered_set>
#include "KappaMap.h"  // Assuming KappaMap is also a class

class ClusterManager {
private:
    KappaMap kappaMap;
    std::unordered_map<int, std::unordered_set<int>> seeds;
    std::unordered_map<int, std::unordered_set<int>> clusters;

public:
    ClusterManager(const KappaMap& km);
    void initializeSeeds(double threshold);
    void mergeSeeds();
    double calculateOverlap(int currentTermIdx, int otherTermIdx);
    void optimizeClusters();
    Rcpp::List exportClustersForR();
};

#endif
```

#### C++ file
**Example:** ClusterManager.cpp
```
#include "ClusterManager.h"

ClusterManager::ClusterManager(const KappaMap& km) : kappaMap(km) {}

void ClusterManager::initializeSeeds(double threshold) {
    // Implementation details
}

void ClusterManager::mergeSeeds() {
    // Implementation details
}

double ClusterManager::calculateOverlap(int currentTermIdx, int otherTermIdx) {
    // Implementation details
}

void ClusterManager::optimizeClusters() {
    // Implementation details
}

Rcpp::List ClusterManager::exportClustersForR() {
    // Implementation details
}
```

