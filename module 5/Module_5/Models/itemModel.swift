//
//  itemModel.swift
//  Module_5
//
//  Created by Angela Slinker on 11/25/22.
//

import Foundation

struct itemModel: Identifiable {
    let id: String = UUID().uuidString
    let title: String
    let IsComplete: Bool
}
