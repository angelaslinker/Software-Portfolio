//
//  Module_5App.swift
//  Module_5
//
//  Created by Angela Slinker on 11/22/22.
//

import SwiftUI

@main
struct Module_5App: App {
    
    @StateObject var listViewModel: ListViewModel = ListViewModel()
    
    var body: some Scene {
        WindowGroup {
            NavigationView{
                listView()
        }
            .environmentObject(listViewModel)
      }
    }
}
